import React from 'react'

export default function DeleteFeedbaack() {
  return (
    <>
    <h1>
      Feedback -- <b id="addCarousel">view feedback/help</b>
    </h1>
    <br /> <br />
    <h2>View a Feedback</h2>
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
            <a href="#" className="button">
              Replied
            </a>
          </td>
        </tr>
        <tr>
          <td>Julius Neumann</td>
          <td>e-mail@test-email.com</td>
          <td className="select">
            <a href="#" className="button">
              Replied
            </a>
          </td>
        </tr>
        <tr>
          <td>Christoph Koller</td>
          <td>e-mail@test-email.com</td>
          <td className="select">
            <a href="#" className="button">
              Replied
            </a>
          </td>
        </tr>
        <tr>
          <td>Bram Lemmens</td>
          <td>e-mail@test-email.com</td>
          <td className="select">
            <a href="#" className="button">
              Replied
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <br /> <br />
  </>
  
  )
}
