export default function PromoCard() {
  return (
    <div className="promo-card">
      <p className="title">{"from server"}</p>
      <p className="description">{"from server"}</p>

      <style jsx>{`
        .promo-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #ffff;
          border-radius: 16px;
          height: 330px;
          width: 255px;
          margin-top : 58px;
          max-width: 255px;
          box-shadow: 0px 2px 5px #ded3d3;
        }
        .promo-card .title {
          font-weight: 500;
          font-size: 20px;
          line-height: 30px;
          text-align: center;
          color: #666666;
        }
        .promo-card .description {
          font-weight: 500;
          font-size: 14px;
          line-height: 30px;
          color: #666666;
          mix-blend-mode: normal;
          opacity: 0.3;
        }
        @media (max-width: 1000px) {
          .promo-card {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
