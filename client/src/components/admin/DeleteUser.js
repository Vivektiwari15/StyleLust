import React from 'react'

export default function DeleteUser() {
  return (
    <>
  <h1>
    User -- <b id="addCarousel">Delete User</b>
  </h1>
  <br /> <br />
  <h2>Delete a User</h2>
  <br />
  <table>
    <thead>
      <tr>
        <th>Sr.No</th>
        <th>E-mail</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Iacob Geaorgescu</td>
        <td>e-mail@test-email.com</td>
        <td className="select">
          <a href="#" id="deleteBtn">
            Delete
          </a>
        </td>
      </tr>
      <tr>
        <td>Julius Neumann</td>
        <td>e-mail@test-email.com</td>
        <td className="select">
          <a href="#" id="deleteBtn">
            Delete
          </a>
        </td>
      </tr>
      <tr>
        <td>Christoph Koller</td>
        <td>e-mail@test-email.com</td>
        <td className="select">
          <a href="#" id="deleteBtn">
            Delete
          </a>
        </td>
      </tr>
      <tr>
        <td>Bram Lemmens</td>
        <td>e-mail@test-email.com</td>
        <td className="select">
          <a href="#" id="deleteBtn">
            Delete
          </a>
        </td>
      </tr>
    </tbody>
  </table>
  <br /> <br />
</>
  )
}
