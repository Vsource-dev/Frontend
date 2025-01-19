
function Oshi(){

    const imageUrl = './src/assets/KurokowaAkane.jpg'
    const handleClic = (e) => e.target.style.display ='none'

    return(<>
    
        <img onClick={(e) => handleClic(e)} src={imageUrl} alt="" />

    </>)

}

export default Oshi