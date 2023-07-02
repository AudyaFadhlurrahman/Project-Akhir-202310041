import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { openModal } from "../../../../Layouts/Modals/ModalsPopUp";

export default function FormRegister() {
  const objProfile = {
    nama: "",
    email: "",
    alamat: "",
    password: "",
  };

  const [profile, setProfile] = useState(objProfile);
  const [successSubmit, setSuccseesSubmit] = useState(false);

  const handlerSubmit = (e) => {
    e.preventDefault();
    var formid = e.target.id;
    var target = document.getElementById(formid);
    var myButton = target.getElementsByClassName("btn-submit")[0];
    myButton.textContent = "Processing...";
    myButton.disabled = true;
    if (profile.nama && profile.email && profile.alamat && profile.password) {
      openModal({ header: "Information", message: <RenderMessage profile={profile} /> });
      setSuccseesSubmit(true);
    } else {
      openModal({ header: "Information", message: <p className="text-danger">Please fill up the form with correctly</p> });
    }
    myButton.textContent = "Submit";
    myButton.disabled = false;
  };

  async function registerAdmin(event) {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      });

      const data = await response.json();
      console.log(data);
      // Tambahkan logika atau respons yang sesuai di sini, misalnya menampilkan pesan sukses atau error
    } catch (error) {
      console.error(error);
      // Tambahkan logika atau respons yang sesuai di sini, misalnya menampilkan pesan error
    }
  }

  return successSubmit ? (
    <Navigate to="/signin" replace={true} />
  ) : (
    <div className="card d-flex flex-column flex-center w-lg-500px">
      <div className="nav-form d-flex flex-center w-lg-500px">
        <div className="card-header justify-content-center">
          <h3 className="card-title flex-column">
            <span className="card-label fw-bolder font-form text-light">Register</span>
          </h3>
        </div>
      </div>
      <div className="card-body shadow-lg w-lg-500px">
        <form className="form-profile" method="post" onSubmit={registerAdmin} id="form-profile">
          <div className="fv-row mb-10 fv-plugins-icon-container">
            <label className="required form-label fs-6 fw-bolder text-dark">Nama</label>
            <input type="text" name="nama" required className="form-control form-control-lg form-control-solid" defaultValue={profile.nama} onChange={(e) => setProfile({ ...profile, nama: e.target.value })} />
          </div>

          <div className="fv-row mb-10 fv-plugins-icon-container">
            <label className="required form-label fs-6 fw-bolder text-dark">Email</label>
            <input type="email" name="email" required className="form-control form-control-lg form-control-solid" defaultValue={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
          </div>
          <div className="fv-row mb-10 fv-plugins-icon-container">
            <label className="form-label fs-6 fw-bolder text-dark">Alamat</label>
            <input type="text" name="alamat" className="form-control form-control-lg form-control-solid" defaultValue={profile.alamat} onChange={(e) => setProfile({ ...profile, alamat: e.target.value })} />
          </div>
          <div className="fv-row mb-10 fv-plugins-icon-container">
            <label className="required form-label fs-6 fw-bolder text-dark">Password</label>
            <input type="password" name="password" required className="form-control form-control-lg form-control-solid" defaultValue={profile.password} onChange={(e) => setProfile({ ...profile, password: e.target.value })} />
          </div>

          <div className="text-center">
            <button type="button" className="btn btn-lg btn-light">
              Clear
            </button>

            <button type="submit" className="btn btn-lg btn-primary mx-2 btn-submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const RenderMessage = ({ profile }) => {
  return (
    <div className="profile">
      <p className="text-dark">Nama: {profile.nama}</p>
      <p className="text-dark">Email: {profile.email}</p>
      <p className="text-dark">Alamat: {profile.alamat}</p>
      <p className="text-dark">Password: {profile.password}</p>
    </div>
  );
};
