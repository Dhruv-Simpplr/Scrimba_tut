import bckg from './resizedbckg.png';
function Page() {
  return (
    <div
      className="page-div"
      style={{
        backgroundImage: `url(${bckg})`,
        backgroundPositionX: '87vw',
        backgroundPositionY: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1>Fun Facts About React</h1>
      <ul className="page--facts">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

export default Page;
