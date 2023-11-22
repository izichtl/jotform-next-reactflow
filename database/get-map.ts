import db_con from './conection'

export const getMapFromHash = async (hash: string) => {
  try {
    const query = `
    SELECT * FROM life_map_vA WHERE hash = $1
    `
    const values = [
      hash,
    ]

    const client = await db_con.connect()
    const result = await client.query(
        query,
        values
    );
    client.release()
    return result.rows[0]
  } catch ( error ) {
    console.log( error )
  }};
