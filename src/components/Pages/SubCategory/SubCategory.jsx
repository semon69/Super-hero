import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubCategoryData from '../SubCategoryData/SubCategoryData';

const SubCategory = () => {
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch('https://super-heros-server.vercel.app/allToys')
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [])
    const avengers = toys.filter(toy => toy.subCategory.toLowerCase() == 'avengers')
    const starWars = toys.filter(toy => toy.subCategory.toLowerCase() == 'star wars')
    const transformer = toys.filter(toy => toy.subCategory.toLowerCase() == 'transformer')
    // console.log(starWars)
    return (
        <div className='my-14 bg-gray-200 py-2 mx-2'>
            <Tabs>
                <div>
                    <h1 className='text-3xl font-bold my-9 text-black text-start ms-4 w-72 p-3  hover:bg-black hover:text-white'>Shop by <span className='text-indigo-800'>Category</span></h1>
                </div>
                <TabList className='font-bold my-6 text-center'>
                    <Tab>Avengers</Tab>
                    <Tab>Star Wars</Tab>
                    <Tab>Transformer</Tab>
                </TabList>

                <TabPanel>
                    <h2 className=' text-3xl text-indigo-800 font-bold text-center'>Avengers Character's Toys</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-8 lg:w-2/3 mx-auto'>
                        {
                            avengers.map(data => <SubCategoryData key={data._id} data={data}></SubCategoryData>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <h2 className=' text-3xl text-indigo-800 font-bold'>Star Wars Character's Toys</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-8 lg:w-2/3 mx-auto'>
                        {
                            starWars.map(data => <SubCategoryData key={data._id} data={data}></SubCategoryData>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <h2 className=' text-3xl text-indigo-800 font-bold'>Transformers Character's Toys</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-8 lg:w-2/3 mx-auto'>
                        {
                            transformer.map(data => <SubCategoryData key={data._id} data={data}></SubCategoryData>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default SubCategory;