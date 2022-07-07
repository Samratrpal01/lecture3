import ProdcutCatalog from "./Components/ProductCatalog"
const data=[{
  itemprice:"10000",
  itemLink:"https://www.amazon.in/Lenovo-Workstation-i7-1165G7-Anti-Glare-SSD/dp/B09MHBMCQG/ref=sr_1_13?crid=2OTO1DMLJITVB&keywords=think+pads&qid=1657001061&refinements=p_36%3A7252032031&rnid=7252027031&s=computers&sprefix=think%2Caps%2C368&sr=1-13",
  itemImage:"https://m.media-amazon.com/images/I/61yFsJEJUKL._SX522_.jpg",
  itemTitle:"Lenovo ThinkPad P14s Gen 2 Mobile Workstation Laptop, Intel Core i7-1165G7, 14.0 Full HD (1920x1080) IPS Anti-Glare, NVIDIA Quadro T500, 16GB DDR4 RAM, 1TB PCIe SSD, Windows 10 Pro - Black"
},
{
  itemprice:"10000",
  itemLink:"https://www.amazon.in/Lenovo-Workstation-i7-1165G7-Anti-Glare-SSD/dp/B09MHBMCQG/ref=sr_1_13?crid=2OTO1DMLJITVB&keywords=think+pads&qid=1657001061&refinements=p_36%3A7252032031&rnid=7252027031&s=computers&sprefix=think%2Caps%2C368&sr=1-13",
  itemImage:"https://m.media-amazon.com/images/I/61yFsJEJUKL._SX522_.jpg",
  itemTitle:"Lenovo ThinkPad P14s Gen 2 Mobile Workstation Laptop, Intel Core i7-1165G7, 14.0 Full HD (1920x1080) IPS Anti-Glare, NVIDIA Quadro T500, 16GB DDR4 RAM, 1TB PCIe SSD, Windows 10 Pro - Black"
}]
function App()
{
  return(
    <div>
     <ProdcutCatalog Detail={data}></ProdcutCatalog>
    </div>
  )
}
export default App