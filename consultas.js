const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '2468', /* solo funciono con mi clave de postgres (la que trae el desafio es "postgres"*/
    database: 'likeme',
    allowExitOnIdle: true
})

const agregarPosts = async (titulo, img, descripcion, likes = 0) => {
    const consulta = 'INSERT INTO posts VALUES(DEFAULT, $1, $2, $3, $4)' 
    const valores = [titulo, img, descripcion, likes]
    await pool.query(consulta, valores)
    console.log('Post Agregado!')
}

const leerPosts = async () => {
    const consulta = 'SELECT * FROM posts'
    const { rows } = await pool.query(consulta)
    return rows
}

module.exports = { agregarPosts, leerPosts }