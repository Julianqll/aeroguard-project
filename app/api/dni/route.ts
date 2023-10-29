export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const dni = searchParams.get('dni')
    const res = await fetch(`https://api.apis.net.pe/v2/reniec/dni?numero=${dni}`, {
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${process.env.API_TOKEN}`
        },
    })
    const data = await res.json()
   
    return Response.json({ data })
  }