const url ="https://restcountries.com/v3.1/all"  

export async function fetchPaises() {
  try{
    const response = await fetch(url)
    if(!response.ok) {
        throw new Error("No se pueden obtener datos de la API")
    }
  return response.json()
    } catch(error){
      throw error
    }
}