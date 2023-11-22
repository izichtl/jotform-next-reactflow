import db_con from './conection'

export const saveMap = async (jsonData: any, hash: string) => {
  try {
    const query = `
    INSERT INTO life_map_vA (
        hash,
        submission_id,
        birth,
        email,
          mapJson
          ) VALUES (
              $1, $2, $3, $4, $5
            );
    `
    const values = [
      hash,
      jsonData.submission_id,
      jsonData.birth,
      jsonData.email,
      JSON.stringify(jsonData)
    ]


    const client = await db_con.connect()
    const result = await client.query(
        query,
        values
    );
    client.release()
  } catch ( error ) {
    console.log( error )
  }
  };
