import Link from "next/link";
export default function CartCheckoutComponet({ cartContext }) {
  return (
    <div>
      <p>Total items : {cartContext.items.length}</p>
      <p>Estimated Total: ${cartContext.totalAmount}</p>

      <Link legacyBehavior href="/checkout">
        <a>
          <button className="check-button">Checkout</button>
        </a>
      </Link>
      <style jsx>{`
        .check-button {
          width: 80%;
          border: none;
          margin-top: 10px;
          padding: 15px 20px;
          background: linear-gradient(195deg, #1260a3, #1a73e8, #36c7c7);
          color: white;
          cursor: pointer;
        }
        .check-button:hover {
          background: blue;
        }
      `}</style>
    </div>
  );
}
