import classes from './Header.module.css'

export default function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.headercontents}>
        <h2>Order Here</h2>
        <p>{`Craving something delicious? Satisfy your hunger with just a few clicks! Explore a world of flavors and have your favorite dishes delivered hot and fresh to your door. Whether it's a quick snack or a hearty meal, we've got you covered. Order now and indulge in the taste you love!`}</p>
        <button>CheckOut Menu</button>
      </div>
    </div>
  )
}
