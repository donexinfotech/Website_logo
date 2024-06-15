import React from 'react'
import './Contact.css'

export default function contact() {
  return (
    <div className='contact'>
        <div className='heading'>
            <h2>Contact us</h2>
        </div>
        <form>
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
                    </div>
                    </div>
                    <div className="mb-3 mt-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>

                        <label for="phoneNumber" className="form-label mt-3">Phone Number</label>
                        <input type="integer" id="phoneNumber" className="form-control" aria-describedby="passwordHelpBlock"/>

                        <label for="company" className="form-label mt-3">Company</label>
                        <input type="integer" id="company" className="form-control" aria-describedby="passwordHelpBlock"/>

                        <div class="mb-3 mt-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                <button type="submit" className="btn btn-primary button-contact">Submit</button>
                <button type="submit" className="btn btn-primary Wbutton"><i class="fa-brands fa-whatsapp"></i> WhatsApp</button>
            </div>
        </form>
    </div>
  )
}
