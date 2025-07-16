const { Client } = require('pg');

const client = new Client({
   host: 'localhost',
    user: 'postgres',
    password: 'kya',
    database: 'postgres',
    port: 12345, // default PostgreSQL port
});

async function fetchStudents() {
    try {
        await client.connect();  //This actually connects to the PostgreSQL server using the details you provided.
        console.log('✅ Connected to PostgreSQL');

        const person_table_response = await client.query( "INSERT INTO person (id, name, city)VALUES(1, 'Alice',   'Jaipur'),(2, 'Bob','Delhi'),(3,'Charlie', 'Mumbai'),(4, 'David',   'Pune'),(5, 'Eva','Kolkata'),(6, 'Frank','Chennai'),(7, 'Grace',   'Hyderabad'),(8, 'Henry','Bengaluru'),(9, 'Ivy','Ahmedabad'),(10,'Jack','Lucknow')");
        console.log("query affected successfully!"); // Runs a SQL query on your database.
        //It returns an object with the results. res.rows contains an array of the rows fetched.
        console.log('📦 Data from person table:');
        console.table(person_table_response.rows);

        const student_table_response = await client.query('SELECT name,subject,marks FROM students where marks>90'); 
         console.log('only name and subject and marks Data from students table where marks is greater than 90:');
          console.table(student_table_response.rows);
    } catch (err) {
        console.error('❌ Error executing query', err);
    } finally {
        await client.end();
    }
}

fetchStudents();
 