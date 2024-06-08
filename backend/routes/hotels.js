import express from 'express';
import { Router } from 'express';
import Hotel from '../models/Hotel.js';

const router = Router();


// router.get('/',(req,res)=>{
//     res.json({msg:"GET All Hotels"});
// });
router.get('/', async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.json(hotels);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.get('/:id',(req,res)=>{
    res.json({msg:"GET one Hotel"});
});
router.post('/',(req,res)=>{
    res.json({msg:"Post new Hotel"});
});
router.delete('/:id',(req,res)=>{
    res.json({msg:"Delete a Hotel"});
});
router.patch('/:id',(req,res)=>{
    res.json({msg:"Update a Hotel"});
});

export default router;