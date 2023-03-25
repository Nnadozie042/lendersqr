import React from 'react'
const Man = () => {
    return (
        <div>

            <form onSubmit={handleSubmit}>
                <div className="pt-[3em] space-y-[2.8em]" >
                    <div>
                        <p>Organization:</p>
                        <select className="relative bg-neutral-200 w-[16em] h-[2.5em]" value={organization} onChange={(e) => setOrganization(e.target.value)}>
                            <option value="">--Please choose an organization--</option>
                            <option value="org1">Organization 1</option>
                            <option value="org2">Organization 2</option>
                            <option value="org3">Organization 3</option>
                        </select>

                    </div>

                    <div>

                        <p>Username:</p>
                        <input className="bg-neutral-200 w-[16em] h-[2.5em]" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />

                    </div>
                    <div>

                        <p> Date:</p>
                        <input className="bg-neutral-200 w-[16em]  h-[2.5em]" type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date" />

                    </div>

                    <div>

                        <p> Email:</p>
                        <input className='bg-neutral-200 w-[16em] h-[2.5em] rounded-[0.3em]' type="email" value={email}
                            onChange={(e) => setEmail(e.target.value)} placeholder="Email" />

                    </div>

                    <div>

                        <p>Phone Number:</p>
                        <input className="bg-neutral-200 w-[16em] h-[2.5em] rounded-[0.3em]" type="tel" value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)} placeholder="phone number" />

                    </div>

                    <div>
                        <p> Status:</p>
                        <select className="bg-neutral-200 w-[16em] h-[2.5em]" value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="">--Please choose a status--</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                            <option value="pending">Pending</option>
                        </select>
                    </div>
                    <div className="flex  h-[2em] ">
                        <div>
                            <button className="h-[2.5em] w-[6em] border-solid  bg-gray-50 border-gray-400 rounded-[0.5em]">Reset</button>
                        </div>
                        <div>
                            <button className="bg-blue-400 h-[2.5em] w-[6em] text-white rounded-[0.5em] ml-[3em] color-white ">Filter</button>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Man;