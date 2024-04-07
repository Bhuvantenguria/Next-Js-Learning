import {NextResponse} from 'next/server'
import { users } from '@/lib/db';

// Getting particular users details

export const GET = async(req)=> {
    try{
        const id = req.url.split('user/')[1];
        const singleData = users.filter((user) => user.id.toString() === id);
        if(singleData === 0){
            return NextResponse.json({"message" : "Data Not Found"});
        }
        console.log(singleData);
        return NextResponse.json({"message" : "ok"});
    }
    catch(e){
        return NextResponse.json({"message" : "Error",e},{status : 500});
    }
}


// Deleting particular user

export const DELETE = async(req) => {
    try{
        const id = req.url.split('user/')[1];
        const userIndex = users.findIndex((user) => user.id.toString() === id);
        if(userIndex === -1){
            return NextResponse.json({"message" : "Data Not Found"});
        }
        // console.log(userIndex);
        users.splice(userIndex,1);
        // console.log(users)
        return NextResponse.json({"message" : "ok"});
    }
    catch(e){
        return NextResponse.json({"message" : "Error",e},{status : 500});
    }
}

// Updating the particular User

export const PUT = async(req) => {
    try{
        const id = req.url.split('user/')[1];
        const {username} = await req.json();
        const user = users.find((user) => user.id.toString() === id);
        // console.log(username)
        
        user.username = username; 
        console.log(users)
        return NextResponse.json({"message" : "Data Updated"});
    }
    catch(e){
        return NextResponse.json({"message" : "Error",e},{status : 500});
    }


}