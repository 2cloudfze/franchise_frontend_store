import { useRouter } from "next/router";
export default function Logo() {
  const data = "Franchise";
  const router = useRouter();
  return (
    <>
      <div onClick={() => router.push("/")} className="logo">
        {data}
      </div>

      <style jsx>{`
        .logo {
          font-style: normal;
          font-weight: 900;
          font-size: 22px;
          line-height: 60px;
          letter-spacing: 1.65px;
          text-transform: uppercase;
          color: white;
          text-decoration: none;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
