import axios from 'axios'

const SearchImages = async () => {
  await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID SNrKJD-mu3kwWQ-9Bv6fDY436RkxRp_96ubnlslKqog'

    },
    params:{
      query: 'oceans'

    }
  })
}