SELECT COUNT(*) FROM actors;

INSERT INTO actors (first_name , last_name )
VALUES ( 'Lucille' , 'Ball');
-- ERROR:  une valeur NULL viole la contrainte NOT NULL de la colonne « age » dans la relation « actors »
-- La ligne en échec contient (4, Lucille, Ball, null, null).
