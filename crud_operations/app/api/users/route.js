import {NextResponse} from 'next/server'


export async function GET(request) {

    const {searchParams} = new URL(request.url);
    // const name = searchParams.get('Rahul');
    // const age = searchParams.get('age');
    // console.log(name , age);
    // console.log(searchParams)

    const obj = Object.fromEntries(searchParams.entries());
    console.log(obj)

  return NextResponse.json({obj});
}
