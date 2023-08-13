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
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-5xl font-bold border-l-8 border-orange-500 text-white px-2'>Shop By Category</h1>
            <div className='my-8 py-2 '>
                <Tabs>

                    <TabList className='font-bold my-6 text-center text-orange-500'>
                        <Tab>Avengers</Tab>
                        <Tab>Star Wars</Tab>
                        <Tab>Transformer</Tab>
                    </TabList>

                    <TabPanel>
                        <h2 className=' text-3xl text-orange-600 font-bold text-center'>Avengers Character's Toys</h2>
                        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-8 lg:w-2/3 mx-auto'>
                            {
                                avengers.map(data => <SubCategoryData key={data._id} data={data}></SubCategoryData>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <h2 className=' text-3xl text-orange-600 font-bold text-center'>Star Wars Character's Toys</h2>
                        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-8 lg:w-2/3 mx-auto'>
                            {
                                starWars.map(data => <SubCategoryData key={data._id} data={data}></SubCategoryData>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <h2 className=' text-3xl text-orange-600 font-bold text-center'>Transformers Character's Toys</h2>
                        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-8 lg:w-2/3 mx-auto'>
                            {
                                transformer.map(data => <SubCategoryData key={data._id} data={data}></SubCategoryData>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default SubCategory;