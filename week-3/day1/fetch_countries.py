import requests
import random
import psycopg2

# Connect to PostgreSQL
conn = psycopg2.connect(
    dbname='countries_db',   # replace with your DB name
    user='postgres',         # replace with your username
    password='SNK2013', # replace with your password
    host='localhost',        # or your server's IP
    port='2013'              # default port
)
cur = conn.cursor()

# Create table if it doesn't exist
cur.execute('''
    CREATE TABLE IF NOT EXISTS countries (
        id SERIAL PRIMARY KEY,
        name TEXT,
        capital TEXT,
        flag TEXT,
        subregion TEXT,
        population BIGINT
    );
''')

# Fetch all countries from the API
response = requests.get('https://restcountries.com/v3.1/all')
data = list(response.json())

if isinstance(data, dict):
    print("❌ You received a dictionary, not a list.")
    data = list(data.values())  # Fallback fix
else:
    print("✅ Data is a list of countries.")

# Pick 10 random countries
random_countries = random.sample(data, 10)

# Insert data into the table
for country in random_countries:
    name = country.get('name', {}).get('common', 'N/A')
    capital = country.get('capital', ['N/A'])[0]
    flag = country.get('flags', {}).get('png', 'N/A')
    subregion = country.get('subregion', 'N/A')
    population = country.get('population', 0)

    cur.execute('''
        INSERT INTO countries (name, capital, flag, subregion, population)
        VALUES (%s, %s, %s, %s, %s)
    ''', (name, capital, flag, subregion, population))

# Commit and close
conn.commit()
cur.close()
conn.close()
print(type(data)) 
