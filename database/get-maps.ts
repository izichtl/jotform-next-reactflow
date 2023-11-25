import db_con from './conection'

export const getMapFromUserData = async (day: string, mount: string, year: string, email: string) => {
    try {
    const query = `
    SELECT * FROM life_map_vA WHERE birth = $1 AND email = $2
    `
    const values = [
      `${day}/${mount}/${year}`,
      email,
    ]
    const client = await db_con.connect()
    const result = await client.query(
        query,
        values
    );
    client.release()
    return result.rows
  } catch ( error ) {
    console.log( error )
  }};
