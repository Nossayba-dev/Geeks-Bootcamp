 const form = document.getElementById("myForm");
      const resultDiv = document.getElementById("result");

      form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const lastname = document.getElementById("lastname").value;

        const data = {
          name: name,
          lastname: lastname,
        };
        const jsonString = JSON.stringify(data);
        resultDiv.textContent = jsonString;
      });
