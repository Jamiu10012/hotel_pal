import { useEffect, useState } from 'react';
import axios from 'axios';
import './UserBookingEntry.css';

function UserBookingEntry () {

    //This state hold value for places fetched from the rest-
    //countries api on page load
    const [places, setPlaces] = useState([]);

    //This state collect user input on search place input box
    const [searchInput, setSearchInput] = useState();

    //This state hold value for the filtered search so as to
    //be displayed on screen. . . . . 
    const [filteredSearch, setfilteredSearch] = useState([])


    //This useEffect is used to fetch all countries from rest-
    //countries api on page load.
    useEffect(() => {

        const fetchPlaces = async () => {

            try {

                const response = await axios.get('https://restcountries.com/v3.1/all');

                //console.log(response.data)
                //console.log(typeof response.data)
                setPlaces(response.data)

            } catch (error) {

                console.log(error)


            }  

        }

        fetchPlaces();

    }, [])


    //This effect listens for when searchInput state changes
    //then fetch names of countries based on the input the user
    //add in the search place input box....... 
    useEffect(() => {

        if (searchInput) {

            let newList = places.filter( place => place.name.common.toLowerCase().includes(searchInput.toLowerCase()) )

            console.log('for new list', newList, typeof newList)
            setfilteredSearch(newList)

        }

    }, [searchInput])












    return(
        <div className="userBookingEntryContainer">

            <h2 className="h2">Book with ease</h2>

       
                <div>
                    <input type="text" placeholder="select city" onChange={(e) => setSearchInput(e.target.value)}>

                    </input>
                </div>

                <div>


                {   /*Filtered search for place input */
                    filteredSearch.map((value) => (
                        <div key={value.cca2}>
                            {value.name.common}
                        </div>
                    ) )
                 }




                {
                    /*
                    places.map((place) => (
                        <li key={place.cca2}>
                            {place.name.common}
                        </li>
                    ))

                    */
                }
                </div>








                <div>
                    <input type="text" placeholder="select city">

                    </input>
                </div>

                <div>
                    <input type="text" placeholder="select city">

                    </input>
                </div>
                


          
        </div>
    )

}

export default UserBookingEntry;