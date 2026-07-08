import { NextResponse } from 'next/server';


export async function GET() {
   try {
        const apiKey = process.env.DOG_API_KEY;

        if(!apiKey){
            return NextResponse.json(
        { error: 'Missing DOG_API_KEY environment variable' },
        { status: 500 }
      );

        }
      const res = await fetch('https://api.thedogapi.com/v1/images/search', {
         headers: {
            'x-api-key': apiKey,
            'Content-Type': 'application/json',
         },
      });

      if (!res.ok) {
         return NextResponse.json({ error: res }, { status: res.status });
      }

      const data = await res.json();
      return NextResponse.json({ "image": data[0].url});
   } catch (error) {
      return NextResponse.json({ error: error || 'Unexpected error' }, { status: 500 });
   }
}
