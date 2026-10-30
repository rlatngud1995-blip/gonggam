export type Region = {
  slug: string;
  name: string;
  district: "서북구" | "동남구";
  description: string;
};

export const regions: Region[] = [
  {
    slug: "buldang",
    name: "불당동",
    district: "서북구",
    description:
      "아파트와 상업시설이 밀집한 불당동의 주거·상업공간 특성을 고려한 인테리어를 제안합니다.",
  },
  {
    slug: "dujeong",
    name: "두정동",
    district: "서북구",
    description:
      "아파트, 구축 주거공간, 상가가 함께 형성된 두정동의 공간 특성에 맞춘 인테리어를 진행합니다.",
  },
  {
    slug: "seongseong",
    name: "성성동",
    district: "서북구",
    description:
      "신축 아파트와 주거단지가 많은 성성동에서 생활 동선을 고려한 인테리어를 제안합니다.",
  },
  {
    slug: "baekseok",
    name: "백석동",
    district: "서북구",
    description:
      "주거공간과 상업공간이 함께 형성된 백석동에서 공간 목적에 맞춘 인테리어를 진행합니다.",
  },
  {
    slug: "seongjeong",
    name: "성정동",
    district: "서북구",
    description:
      "구축 주거공간과 상가가 많은 성정동에서 구조 개선과 실용성을 고려한 리모델링을 진행합니다.",
  },
  {
    slug: "ssangyong",
    name: "쌍용동",
    district: "서북구",
    description:
      "다양한 연식의 아파트와 주거공간이 있는 쌍용동에서 공간에 맞춘 리모델링을 제안합니다.",
  },
  {
    slug: "jiksan",
    name: "직산읍",
    district: "서북구",
    description:
      "주거·상가·업무공간이 함께 있는 직산읍에서 목적에 맞는 인테리어 시공을 진행합니다.",
  },
  {
    slug: "seonghwan",
    name: "성환읍",
    district: "서북구",
    description:
      "주택과 상업공간이 다양한 성환읍에서 공간 상태를 고려한 인테리어와 리모델링을 진행합니다.",
  },
  {
    slug: "ipjang",
    name: "입장면",
    district: "서북구",
    description:
      "주택과 상업시설이 함께 있는 입장면에서 공간별 특성을 고려한 인테리어를 제안합니다.",
  },
  {
    slug: "seonggeo",
    name: "성거읍",
    district: "서북구",
    description:
      "주거공간과 사업장이 다양한 성거읍에서 실용성과 완성도를 고려한 시공을 진행합니다.",
  },

  {
    slug: "cheongdang",
    name: "청당동",
    district: "동남구",
    description:
      "신축 주거단지와 상업시설이 함께 형성된 청당동에서 공간 활용을 고려한 인테리어를 제안합니다.",
  },
  {
    slug: "sinbang",
    name: "신방동",
    district: "동남구",
    description:
      "아파트와 상가가 밀집한 신방동에서 주거와 상업공간에 맞는 인테리어 시공을 진행합니다.",
  },
  {
    slug: "yonggok",
    name: "용곡동",
    district: "동남구",
    description:
      "주거단지가 많은 용곡동에서 가족의 생활 동선과 공간 활용을 고려한 인테리어를 진행합니다.",
  },
  {
    slug: "cheongsu",
    name: "청수동",
    district: "동남구",
    description:
      "아파트와 업무·상업시설이 함께 있는 청수동에서 목적에 맞는 공간을 제안합니다.",
  },
  {
    slug: "wonseong",
    name: "원성동",
    district: "동남구",
    description:
      "구축 주택과 상가가 많은 원성동에서 기존 공간의 장점을 살린 리모델링을 진행합니다.",
  },
  {
    slug: "bongmyeong",
    name: "봉명동",
    district: "동남구",
    description:
      "주거와 상업시설이 함께 있는 봉명동에서 공간 특성에 맞는 인테리어를 진행합니다.",
  },
  {
    slug: "munhwa",
    name: "문화동",
    district: "동남구",
    description:
      "기존 건물과 상가가 많은 문화동에서 공간 개선과 활용도를 고려한 리모델링을 제안합니다.",
  },
  {
    slug: "sajik",
    name: "사직동",
    district: "동남구",
    description:
      "주거와 상업공간이 함께 있는 사직동에서 현장 상태에 맞춘 인테리어를 진행합니다.",
  },
  {
    slug: "mokcheon",
    name: "목천읍",
    district: "동남구",
    description:
      "아파트·주택·상가가 다양한 목천읍에서 공간 용도와 현장 상태를 고려한 시공을 진행합니다.",
  },
  {
    slug: "pungse",
    name: "풍세면",
    district: "동남구",
    description:
      "주택과 사업장 등 다양한 공간이 있는 풍세면에서 목적에 맞춘 인테리어 시공을 진행합니다.",
  },
  {
    slug: "gwangdeok",
    name: "광덕면",
    district: "동남구",
    description:
      "주택과 상업공간이 다양한 광덕면에서 공간 특성에 맞춘 리모델링과 인테리어를 제안합니다.",
  },
  {
    slug: "byeongcheon",
    name: "병천면",
    district: "동남구",
    description:
      "주거와 상업시설이 함께 있는 병천면에서 공간 활용을 고려한 인테리어를 진행합니다.",
  },
  {
    slug: "buk",
    name: "북면",
    district: "동남구",
    description:
      "주택과 다양한 생활공간이 있는 북면에서 공간별 상황에 맞춘 인테리어를 진행합니다.",
  },
  {
    slug: "susin",
    name: "수신면",
    district: "동남구",
    description:
      "주거 및 사업공간이 있는 수신면에서 실용성을 고려한 인테리어와 리모델링을 진행합니다.",
  },
];

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
