import Image from "next/image";

const contributors = [
  {
    name: "이현수",
    message: (
      <>
        공모전 출품 경험을 <br />
        개선하는 문제해결능력
      </>
    ),
    imageSrc: "/image/landing/HSpic.png",
    imageAlt: "현수사진",
    description: (
      <>
        프로젝트 리더 <br />
        DCA, KoSAC 등 국내 공모전 수상 경험
      </>
    ),
  },
  {
    name: "우준식",
    message: (
      <>
        분석과 피드백을 통한 <br />
        첨예한 기획
      </>
    ),
    imageSrc: "/image/landing/JSpic.png",
    imageAlt: "준식사진",
    description: (
      <>
        한광아 9기 최우수 졸업생 <br />
        국내 공모전 수상경력 11회 <br />
        클리오, 뉴욕 페스티벌, 몽트뢰 국제광고제 수상
      </>
    ),
  },
  {
    name: "신민서",
    message: (
      <>
        수많은 공모전 경험으로
        <br />
        얻은 반짝이는 노하우
      </>
    ),
    imageSrc: "/image/landing/MSpic.png",
    imageAlt: "민서사진",
    description: (
      <>
        연합 광고동아리 애드컬리지 66대 회장 <br />
        연합 공모전 동아리 빅프라이즈 9기 회장 <br />
        국내 공모전 수상경력 9회 <br />
        클리오, 뉴욕 페스티벌, 몽트뢰 국제광고제 수상
      </>
    ),
  },
];

function ContributorSection() {
  return (
    <div className="flex justify-center items-center flex-col bg-gray-100 py-12 sm:py-[150px] px-4 sm:px-[120px]">
      <div className="text-black font-bold font-default text-[28px] sm:text-[50px]/[70px] text-center">
        수상한 녀석들을 소개합니다
      </div>
      <div className="text-gray-600 font-T02-SB mt-4 sm:mt-6 text-sm sm:text-base text-center">
        출품자였던 대학생 3인의 경험을 담아 출품자들을 위한 리포트를
        제작했습니다.
      </div>

      <div className="mt-10 sm:mt-20 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-[30px] w-full sm:w-[1200px]">
        {contributors.map((c, i) => (
          <div
            key={i}
            className="w-full sm:w-[380px] h-[420px] sm:h-[502px] rounded-[16px] sm:rounded-[20px] bg-white shadow-custom-light flex justify-center"
          >
            <div className="flex flex-col mt-6 sm:mt-9 items-center sm:items-center w-full">
              <div className="w-[54px] sm:w-[62px] h-7 sm:h-8 py-1 px-2 sm:px-[10px] rounded-[8px] bg-blue-50 flex items-center justify-center min-w-fit whitespace-nowrap text-center sm:text-left">
                <p className="text-blue-main font-B02-M text-xs sm:text-base">
                  {c.name}
                </p>
              </div>
              <p className="mt-3 sm:mt-5 text-black font-T02-B text-center sm:text-center text-base sm:text-lg">
                {c.message}
              </p>

              <div className="mt-6 sm:mt-11 w-[90px] sm:w-[130px] h-[90px] sm:h-[130px] bg-blue-100 rounded-full relative overflow-hidden">
                <Image
                  src={c.imageSrc}
                  alt={c.imageAlt}
                  width={105}
                  height={122}
                  className={`absolute left-1/2 -translate-x-1/2 ${
                    c.name === "우준식" ? "bottom-[-11px]" : "bottom-0"
                  }`}
                />
              </div>

              <div className="mt-6 sm:mt-10 text-gray-300 font-B02-M sm:text-base">
                {c.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 sm:mt-[124px] w-full sm:w-[1200px]">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-6 sm:gap-0">
          <div className="text-black font-semibold font-default text-[20px] sm:text-[36px]">
            <span className="text-blue-main">현업자의 시선을 반영해</span>{" "}
            <br />
            실전에서 통하는 리포트를 <br />
            완성했습니다
          </div>

          <div className="flex flex-col justify-center items-center sm:flex-row pl-0 sm:pl-[49px] w-full sm:w-[706px] h-auto sm:h-[318px] sm:items-start rounded-[20px] sm:rounded-[30px] bg-white shadow-custom-light">
            <div className="flex flex-col flex-1 mt-6 sm:mt-10">
              <div className="w-auto sm:w-[184px] h-8 sm:h-10 py-1 sm:py-2 sm:px-[14px] rounded-[8px] sm:rounded-[12px] bg-blue-50 flex items-center justify-center">
                <p className="text-blue-main font-B02-M text-xs sm:text-base">
                  ThePR (PR대행사) 대표
                </p>
              </div>

              <div className="mt-4 sm:mt-[19px] text-black font-default font-bold text-[22px] sm:text-[40px]">
                김진희
              </div>

              <div className="mt-4 sm:mt-10 text-gray-600 font-B01-M text-xs sm:text-base">
                <div className="flex gap-2 sm:gap-[14px] truncate">
                  <span>-</span>
                  <span>브랜드 PR 20년, 클라이언트 200여개</span>
                </div>
                <div className="flex gap-2 sm:gap-[14px]">
                  <span>-</span>
                  <span>현 서울시 브랜드 홍보 위원</span>
                </div>
                <div className="flex gap-2 sm:gap-[14px]">
                  <span>-</span>
                  <span>다수 광고, PR 공모전 심사 참여</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center mt-4 sm:mt-0">
              <Image
                src="/image/landing/JHpic.png"
                alt="진희님사진"
                width={160}
                height={140}
                className="sm:w-[372px] sm:h-[318px] w-[160px] h-[140px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContributorSection;
