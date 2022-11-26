-- INNER JOIN for all columns Tables | Faran  | 19 Nov, 2022 
SELECT * FROM students INNER JOIN schools ON students.id = schools.stud_id

-- LEFT JOIN Tables | Faran  | 19 Nov, 2022 
SELECT * FROM students LEFT JOIN schools ON students.id = schools.stud_id

-- INNER JOIN for specific columns with where clause Tables | Faran  | 19 Nov, 2022 
SELECT students.id,students.name,students.email,students.city,students.phone_no,schools.school_name,schools.class 
FROM students RIGHT JOIN schools     
ON students.id = schools.stud_id
WHERE schools.class = "6th";

-- INNER JOIN for specific columns with where clause Tables | Faran  | 19 Nov, 2022 
SELECT students.id,students.name,students.email,students.city,students.phone_no,schools.school_name,schools.class 
FROM students LEFT JOIN schools 
ON students.id = schools.stud_id
WHERE schools.class = "6th"
ORDER BY name;

-- AND Operator | Faran  | 25 Nov, 2022 
SELECT * FROM `products` WHERE quantity < 1500 AND prod_code = 'Mark'

-- OR Operator | Faran  | 25 Nov, 2022 
SELECT * FROM `products` WHERE name = 'Red Marker' OR name = 'blue marker' OR name = 'black marker'

-- IN Operator | Faran  | 25 Nov, 2022 
SELECT * FROM `products` WHERE name IN ('blue marker', 'Red Marker', 'black marker')

-- Update | Faran  | 25 Nov, 2022
UPDATE `products` SET `prod_code` = NULL WHERE `products`.`id` = 3;

-- Find NULL Value | Faran  | 25 Nov, 2022
SELECT * FROM `products` WHERE prod_code IS null

-- Order By | Faran  | 25 Nov, 2022
SELECT * FROM `products` WHERE name LIKE '_e%' ORDER BY prod_code ASC

-- concate func. | Faran  | 25 Nov, 2022
SELECT concat(prod_code,' - ',name) as 'Product_Desc.', id,quantity,price FROM products