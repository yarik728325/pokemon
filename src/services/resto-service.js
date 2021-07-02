
export default class RestoService{
    async getResource(url) {  
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + 
                `, received ${res.status}`);
        }
        return await res.json();
    }

    async getMenuItems (currentPage = 1 , offset=10) {
        const limit = currentPage*offset-offset;
        if(currentPage == 1){
            currentPage = 0;
        }
        let newarr = [];
        const {results,count} = await this.getResource(`https://pokeapi.co/api/v2/pokemon?limit=${offset}&offset=${limit}`);
        for(let i = 0;i<results.length;i++){
            const {url} = results[i];
            newarr.push(
                await this.getResource(url)
            ); 
        }
       return {
           newarr,
           count
       }
    }
    async getOneItem(url){
        return await this.getResource(`https://pokeapi.co/api/v2/pokemon/${url}`)
    }
    
}
