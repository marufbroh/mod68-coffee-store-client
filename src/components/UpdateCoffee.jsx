import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    console.log(coffee);
    const { _id, name, quantity, supplier, taste, category, details, photoURL } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoURL = form.photourl.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photoURL }
        // console.log(newCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.acknowledged){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    }

    return (
        <section className='container mx-auto bg-[#F4F3F0] p-24'>
            <div className='text-center'>
                <h3 className='text-3xl font-bold mb-3'>Update {name}</h3>
                <p className='font-serif text-slate-600'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleUpdateCoffee}>
                {/* form row */}
                <div className='md:flex gap-3'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' defaultValue={name} placeholder="Enter coffee name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Available quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='quantity' defaultValue={quantity} placeholder="Enter coffee quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row */}
                <div className='md:flex gap-3'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='supplier' defaultValue={supplier} placeholder="Enter coffee supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='taste' defaultValue={taste} placeholder="Enter coffee taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row */}
                <div className='md:flex gap-3'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='category' defaultValue={category} placeholder="Enter coffee category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='details' defaultValue={details} placeholder="Enter coffee details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Photo</span>
                    </label>
                    <label className="input-group">
                        <input type="url" name='photourl' defaultValue={photoURL} placeholder="Enter photo URL" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className='flex w-full mt-4'>
                    <button className='bg-[#D2B48C] hover:bg-[#e08a19] p-3 rounded w-full font-bold border border-yellow-950' type='submit'>Update Coffee</button>
                </div>
            </form>
        </section>
    );
};

export default UpdateCoffee;