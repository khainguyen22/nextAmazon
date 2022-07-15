export const getProps = async () => {
    try {
        const response = await fetch('http://localhost:1337/api/products?populate=*')
        return response
    } catch (error) {
        console.log(error);

    }
}