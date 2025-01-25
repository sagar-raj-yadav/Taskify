
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const CreateTask=async(req,res)=>{
 const {title,status,priority,dueDate}=req.body;
 const formattedDate = new Date(dueDate).toLocaleDateString('en-US');

 try{
    const newTask=await prisma.Task.create({
        data:{
        title,status,priority,dueDate:formattedDate
        } 
    });
    res.status(200).json({message:"task added succesully" ,newTask})
 }catch(error){
    res.status(500).json({ error: 'internal server error' })
 }

}


const GetAllTask=async(req,res)=>{
    try{
        const {status}=req.query;
        const query=status?{status}:{};

        const allTask=await prisma.Task.findMany(query);
        res.status(200).json({ message: 'succesfully fetch all tasks' ,allTask})
    }catch(error){
    res.status(500).json({ error: 'internal server error' })
 }
}


const UpdateTask=async(req,res)=>{
    const {id}=req.params;
    const {title,status,priority,dueDate}=req.body;
    const formattedDate = new Date(dueDate).toLocaleDateString('en-US');

    try {
    const updatedTask = await prisma.Task.update({
        where:{
            id:Number(id)
        },
        data:{
            title,status,priority,dueDate:formattedDate
        }
    })
    res.status(200).json({ message: 'succesfully update task by id' ,updatedTask})
    }catch(error){
    res.status(500).json({ error: 'internal server error' })
    }
}

const DeleteTask=async(req,res)=>{
    const {id}=req.params;
    try{
    const deletedTask=await prisma.Task.delete({
        where:{
            id:Number(id)
        }
    })
    res.status(200).json({ message: 'succesfully delete task by id' ,deletedTask})
    }catch(error){
    res.status(500).json({ error: 'internal server error' })
    }
}

export  {CreateTask,GetAllTask,DeleteTask,UpdateTask};