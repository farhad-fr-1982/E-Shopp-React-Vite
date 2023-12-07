import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Data from '../products.json'
import ProductCart from './ProductCart'
import Paginations from './Paginations'
import Search from './Search'
import ShopCategory from './ShopCategory'


const showResult = 'Showing 01 - 12 of 140 Results'

const Shop = () => {
  const [gridList,setGridList] = useState(true)
  const [products,setProducts] = useState(Data)

  // console.log(products)

  //paginations 
  const [currentPage,setCurrentPage] = useState(1)
  const productsPrePage = 12

  const indexOfLastProduct = currentPage * productsPrePage;
  const indexOfFirstProduct = indexOfLastProduct - productsPrePage;
  const currentProducts = products.slice(indexOfFirstProduct,indexOfLastProduct)

  const paginate = (pageNumber) =>{
    setCurrentPage(pageNumber)
  }

  const [selectedCategory,setSelectedCategory] = useState('All')
  const menuItems = [...new Set(Data.map((val) => val.category))]

  const filterItem = (curcat) =>{
    const newItem = Data.filter((newVal) =>{
      return newVal.category === curcat;
    })

    setSelectedCategory(curcat)
    setProducts(newItem)
  }


  return (
    <div>
      <PageHeader title='Our Shop Page' curPage='Shop'/>

      <div className='shop-page padding-tb'>
        <div className="container">
          <div className='row justify-content-center'>
            <div className='col-lg-8 col-12'>
              <article>
                <div className='shop-title d-flex flex-wrap justify-content-between'>
                  <p>{showResult}</p>
                  <div className={`product-view-mode ${gridList ? 'gridActive' : 'listActive'}`}>
                    <a className='grid' onClick={() => setGridList(!gridList)}>
                      <i className='icofont-ghost'></i>
                    </a>
                    <a className='list' onClick={() => setGridList(!gridList)}>
                      <i className='icofont-listine-dots'></i>
                    </a>
                  </div>
                </div>

                <div>
                  <ProductCart gridList = {gridList} products={currentProducts}/>
                </div>

                <Paginations productsPrePage = {productsPrePage} totalProducts = {products.length} paginate={paginate} activePage={currentPage}/>

              </article>
            </div>
            <div className='col-lg-4 col-12'>
              <aside>
                <Search products={products} gridList={gridList}/>
                <ShopCategory filterItem={filterItem} setItem={setProducts} menuItems={menuItems} setProducts={setProducts} selectedCategory={selectedCategory}/>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop