import { status } from "express/lib/response";
import {NextResponse} from 'next/server';
import { users } from "@/lib/db";


// Getting the stored data
export const GET = async(req,res) => {
    try{
        return NextResponse.json(users);
    }
    catch(e){
        return NextResponse.json({"message":"error",e},{status:500})
    }
}

//creating  a new user
export const POST = async (req, res)=>{
    const {username} = await req.json();
    console.log(username);
    try{
        const newData = {username};
        newData.id = users.length + 1 ;
        users.push(newData);
        return NextResponse.json(users);

    }
    catch(e){
        return NextResponse.json({"message":"error",e},{status:500});
    }
}