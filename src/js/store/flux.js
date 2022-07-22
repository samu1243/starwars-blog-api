const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			planets: [],
			planet: {},
			characters: [],
			character: {},
			ships: [],
			ship: {},
			favorites: []
		},
		actions: {
			 getPlanets: async () =>{
				let response = await fetch('https://swapi.dev/api/planets')
				if (response.ok){
					let data = await response.json()
					setStore({planets: data.results})
				} 
			},
			getPlanet: async (id) =>{
				let response = await fetch(`https://swapi.dev/api/planets/${id}`)
				if (response.ok){
					let data = await response.json()
					setStore({planet: data})
				}
			},
			getCharacters: async () =>{
				let response = await fetch('https://swapi.dev/api/people')
				if (response.ok){
					let data = await response.json()
					setStore({characters: data.results})
				}
			},
			getCharacter: async (id)=>{
				let response = await fetch(`https://swapi.dev/api/people/${id}`)
				if (response.ok){
					let data = await response.json()
					setStore({character: data})
				}
			},

			getShips: async ()=>{
				let response = await fetch(`https://swapi.dev/api/starships`)
				if (response.ok){
					let data = await response.json()
					setStore({ships: data.results})
				}
			},
			getShip: async (id)=>{
				let response = await fetch(`https://swapi.dev/api/starships/${id}`)
				if (response.ok){
					let data = await response.json()
					setStore({ship: data})
				}
			},
			saveFavorite(item){
				const store = getStore();
				const favorite = store.favorites;
				const newFavorite = [...favorite, { name: item, id: favorite.length }]
				setStore({favorites: newFavorite})
			},

			deleteFavorite(id){
				const store = getStore();
				const favorites = store.favorites;
				const handleFavorites = favorites.filter((item) => item.id !== id);
				setStore({favorites: handleFavorites})
			},


			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
