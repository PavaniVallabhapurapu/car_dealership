import React,{ useState } from 'react';
import {Link} from 'react-router-dom';
import './Dealerships.css';
const Dealerships = () => {
    const [selectedState, setSelectedState] = useState('');
    const dealers =[
        { id: 1, dealerName: 'Auto World', city: 'Los Angeles', address: '1234 Sunset Blvd', zip: '90001', state: 'California' },
        { id: 2, dealerName: 'Car Nation', city: 'San Francisco', address: '5678 Market St', zip: '94103', state: 'California' },
        { id: 3, dealerName: 'DriveTime', city: 'San Diego', address: '9101 Ocean Dr', zip: '92101', state: 'California' },
        { id: 4, dealerName: 'Luxury Motors', city: 'Sacramento', address: '1213 Capitol Ave', zip: '95814', state: 'California' },
        { id: 5, dealerName: 'Prestige Auto', city: 'Fresno', address: '1415 Main St', zip: '93722', state: 'California' },
        { id: 6, dealerName: 'Big Apple Cars', city: 'New York', address: '1617 Broadway', zip: '10001', state: 'New York' },
        { id: 7, dealerName: 'Empire State Autos', city: 'Buffalo', address: '1819 Elmwood Ave', zip: '14201', state: 'New York' },
        { id: 8, dealerName: 'Metro Motors', city: 'Rochester', address: '2021 University Ave', zip: '14607', state: 'New York' },
        { id: 9, dealerName: 'Premier Auto', city: 'Albany', address: '2223 State St', zip: '12203', state: 'New York' },
        { id: 10, dealerName: 'Upstate Cars', city: 'Syracuse', address: '2425 Onondaga Blvd', zip: '13215', state: 'New York' },
        { id: 11, dealerName: 'Lone Star Autos', city: 'Houston', address: '2627 Westheimer Rd', zip: '77002', state: 'Texas' },
        { id: 12, dealerName: 'Texas Prime', city: 'Dallas', address: '2829 Commerce St', zip: '75201', state: 'Texas' },
        { id: 13, dealerName: 'Cowboy Cars', city: 'Austin', address: '3031 Guadalupe St', zip: '78705', state: 'Texas' },
        { id: 14, dealerName: 'Rodeo Drive', city: 'San Antonio', address: '3233 Broadway', zip: '78209', state: 'Texas' },
        { id: 15, dealerName: 'Alamo Autos', city: 'El Paso', address: '3435 Mesa St', zip: '79902', state: 'Texas' },
    ];
    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
    };
    const filteredDealers = selectedState
        ? dealers.filter(dealer => dealer.state === selectedState)
        : dealers;
    
    return(
        <div className="dealerships-container">
            <h2>Dealership</h2>
            <p>List of car dealerships will be here</p>
            <table className="dealerships-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Dealer Name</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>ZIP</th>
                        <th>State
                        <div className="filter-container">
                <select value={selectedState} onChange={handleStateChange}>
                    <option value="">Select State</option>
                    <option value="California">California</option>
                    <option value="New York">New York</option>
                    <option value="Texas">Texas</option>
                </select>
                </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {(filteredDealers.length > 0 ? filteredDealers :dealers).map((dealer) => (
                        <tr key={dealer.id}>
                            <td>{dealer.id}</td>
                            <td><Link to={`/dealership/${dealer.id}`}>{dealer.dealerName}</Link></td>
                            <td>{dealer.city}</td>
                            <td>{dealer.address}</td>
                            <td>{dealer.zip}</td>
                            <td>{dealer.state}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default Dealerships;