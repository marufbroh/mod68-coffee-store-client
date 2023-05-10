import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CoffeeCard = ({ coffee, handleRemainingItems }) => {
    const { _id, name, quantity, supplier, taste, category, details, photoURL } = coffee;

    const handleDelete = id => {
        // console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            handleRemainingItems(_id)
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })



    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photoURL} alt="Movie" /></figure>
            <div className="card-body flex-row justify-between items-center">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <h2 className="card-title">Taste: {taste}</h2>
                    <h2 className="card-title">Category: {category}</h2>
                </div>
                <div className="card-actions">
                    <div className="btn-group btn-group-vertical space-y-2">
                        <button className="btn">View</button>
                        <Link to={`/update-coffee/${_id}`} className="btn">Edit</Link>
                        <button onClick={() => handleDelete(_id)} className="btn">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;