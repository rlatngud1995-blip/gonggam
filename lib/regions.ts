
export type Region = {
  slug: string;
  name: string;
  district: "동남구" | "서북구";
  kind: "읍" | "면" | "동";
};

const dongnam: Region[] = [
  { slug: "mokcheon", name: "목천읍", district: "동남구", kind: "읍" },
  { slug: "pungse", name: "풍세면", district: "동남구", kind: "면" },
  { slug: "gwangdeok", name: "광덕면", district: "동남구", kind: "면" },
  { slug: "buk", name: "북면", district: "동남구", kind: "면" },
  { slug: "seongnam", name: "성남면", district: "동남구", kind: "면" },
  { slug: "sushin", name: "수신면", district: "동남구", kind: "면" },
  { slug: "byeongcheon", name: "병천면", district: "동남구", kind: "면" },
  { slug: "dong", name: "동면", district: "동남구", kind: "면" },

  { slug: "jungang", name: "중앙동", district: "동남구", kind: "동" },
  { slug: "munseong", name: "문성동", district: "동남구", kind: "동" },
  { slug: "wonseong1", name: "원성1동", district: "동남구", kind: "동" },
  { slug: "wonseong2", name: "원성2동", district: "동남구", kind: "동" },
  { slug: "bongmyeong", name: "봉명동", district: "동남구", kind: "동" },
  { slug: "ilbong", name: "일봉동", district: "동남구", kind: "동" },
  { slug: "sinbang", name: "신방동", district: "동남구", kind: "동" },
  { slug: "cheongnyong", name: "청룡동", district: "동남구", kind: "동" },
  { slug: "sinan", name: "신안동", district: "동남구", kind: "동" },

  { slug: "cheongdang", name: "청당동", district: "동남구", kind: "동" },
  { slug: "cheongsu", name: "청수동", district: "동남구", kind: "동" },
  { slug: "yonggok", name: "용곡동", district: "동남구", kind: "동" },
  { slug: "sinbu", name: "신부동", district: "동남구", kind: "동" },
  { slug: "anseo", name: "안서동", district: "동남구", kind: "동" },
  { slug: "guseong", name: "구성동", district: "동남구", kind: "동" },
  { slug: "samryong", name: "삼룡동", district: "동남구", kind: "동" },
  { slug: "yuryang", name: "유량동", district: "동남구", kind: "동" },
  { slug: "daga", name: "다가동", district: "동남구", kind: "동" },
  { slug: "sajik", name: "사직동", district: "동남구", kind: "동" },
  { slug: "yeongseong", name: "영성동", district: "동남구", kind: "동" },
  { slug: "daeheung", name: "대흥동", district: "동남구", kind: "동" },
  { slug: "munhwa", name: "문화동", district: "동남구", kind: "동" },
  { slug: "seonghwang", name: "성황동", district: "동남구", kind: "동" },
  { slug: "oryong", name: "오룡동", district: "동남구", kind: "동" },
  { slug: "wonseong", name: "원성동", district: "동남구", kind: "동" },
];

const seobuk: Region[] = [
  { slug: "seonghwan", name: "성환읍", district: "서북구", kind: "읍" },
  { slug: "seonggeo", name: "성거읍", district: "서북구", kind: "읍" },
  { slug: "jiksan", name: "직산읍", district: "서북구", kind: "읍" },
  { slug: "ipjang", name: "입장면", district: "서북구", kind: "면" },

  { slug: "seongjeong1", name: "성정1동", district: "서북구", kind: "동" },
  { slug: "seongjeong2", name: "성정2동", district: "서북구", kind: "동" },
  { slug: "ssangyong1", name: "쌍용1동", district: "서북구", kind: "동" },
  { slug: "ssangyong2", name: "쌍용2동", district: "서북구", kind: "동" },
  { slug: "ssangyong3", name: "쌍용3동", district: "서북구", kind: "동" },
  { slug: "baekseok", name: "백석동", district: "서북구", kind: "동" },
  { slug: "buldang", name: "불당동", district: "서북구", kind: "동" },
  { slug: "buseong1", name: "부성1동", district: "서북구", kind: "동" },
  { slug: "buseong2", name: "부성2동", district: "서북구", kind: "동" },

  { slug: "ssangyong", name: "쌍용동", district: "서북구", kind: "동" },
  { slug: "dujeong", name: "두정동", district: "서북구", kind: "동" },
  { slug: "seongseong", name: "성성동", district: "서북구", kind: "동" },
  { slug: "seongjeong", name: "성정동", district: "서북구", kind: "동" },
  { slug: "ch aam".replace(" ", ""), name: "차암동", district: "서북구", kind: "동" },
  { slug: "eopseong", name: "업성동", district: "서북구", kind: "동" },
  { slug: "sindang", name: "신당동", district: "서북구", kind: "동" },
  { slug: "budae", name: "부대동", district: "서북구", kind: "동" },
  { slug: "wachon", name: "와촌동", district: "서북구", kind: "동" },
];

export const regions: Region[] = [
  ...dongnam,
  ...seobuk,
];

export const regionMap: Record<string, Region> =
  Object.fromEntries(
    regions.map((region) => [region.slug, region])
  );

export const getRegion = (slug: string) =>
  regionMap[slug];
