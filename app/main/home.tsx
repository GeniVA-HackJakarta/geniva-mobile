import AdsSwiper from "@/components/homepage/AdsSwiper";
import BigBoxAds from "@/components/homepage/BigBoxAds";
import ChallengeBox from "@/components/homepage/ChallengeBox";
import Favourite from "@/components/homepage/Favourite";
import GoToGeniVA from "@/components/homepage/GoToGeniVA";
import LargeBox from "@/components/homepage/LargeBox";
import RegularBox from "@/components/homepage/RegularBox";
import Scan from "@/components/homepage/Scan";
import ScrollViewRightEndButton from "@/components/homepage/ScrollViewRightEndButton";
import Searchbar from "@/components/homepage/Searchbar";
import ServiceButton from "@/components/homepage/ServiceButton";
import SmallBoxMenu from "@/components/homepage/SmallBoxMenu";
import ADS_SWIPER from "@/static/adsSwiper";
import HOMEPAGE_IMAGES from "@/static/image/homepage";
import { formatDateDDMMMYYYY } from "@/utils/dateFormatter";
import { formatCurrency } from "@/utils/numberFormatter";
import { trimText } from "@/utils/stringFormatter";
import React from "react";
import {
  ScrollView,
  View,
  Text,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { Icon } from "react-native-paper";
import SwiperFlatList from "react-native-swiper-flatlist";

interface HomeProps {
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
}

const Home: React.FC<HomeProps> = ({ onScroll }) => {
  return (
    <ScrollView
      className="flex-1"
      onScroll={onScroll}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
    >
      <View className="bg-[#33C072] h-16"></View>
      <View className="relative bg-white">
        {/* Scanner and Search bar */}
        <View className="absolute flex flex-row px-4 -top-4">
          <Scan />
          <Searchbar />
          <Favourite />
        </View>

        {/* Main Body */}
        <View className="flex flex-row items-center justify-between px-4 mt-16">
          <ServiceButton image={HOMEPAGE_IMAGES.transportMenu} text="Car" />
          <ServiceButton image={HOMEPAGE_IMAGES.foodMenu} text="Food" />
          <ServiceButton image={HOMEPAGE_IMAGES.martMenu} text="Mart" />
          <ServiceButton image={HOMEPAGE_IMAGES.deliveryMenu} text="Delivery" />
          <ServiceButton image={HOMEPAGE_IMAGES.allMenu} text="All" />
        </View>

        {/* Go To GeniVA */}
        <GoToGeniVA />

        {/* Ads */}
        <View className="w-full mt-4">
          <ScrollView
            horizontal={true}
            className=""
            contentContainerStyle={{
              flexDirection: "row",
              alignItems: "center",
              gap: 16,
              paddingHorizontal: 16,
            }}
            showsHorizontalScrollIndicator={false}
          >
            <SmallBoxMenu
              title="Link"
              subtitle="Superbank"
              image={HOMEPAGE_IMAGES.superbank}
            />
            <SmallBoxMenu
              title="Top Up"
              subtitle="at Indomaret"
              image={HOMEPAGE_IMAGES.topUp}
            />
            <SmallBoxMenu
              title="Use Points"
              subtitle="279"
              image={HOMEPAGE_IMAGES.crown}
            />
          </ScrollView>
          <View className="px-4 mt-8">
            <BigBoxAds />
          </View>

          {/* Rekomendasi restoran untukmu */}
          <View className="mt-8">
            <View className="flex flex-row justify-between w-full px-4">
              <Text className="text-xl font-semibold">
                Rekomendasi restoran untukmu
              </Text>
              <View className="p-1 bg-[#defbf8] rounded-full">
                <Icon source="arrow-right" size={26} color="#03563a" />
              </View>
            </View>
            <ScrollView
              className="mt-5"
              horizontal={true}
              contentContainerStyle={{ paddingHorizontal: 16, gap: 16 }}
              showsHorizontalScrollIndicator={false}
            >
              <RegularBox
                image={HOMEPAGE_IMAGES.food1}
                title="Sate Madura Bangkalan - Cipete"
                Ad={true}
                distance={2.1}
                rating={4.7}
                discount="75%"
              />
              <RegularBox
                image={HOMEPAGE_IMAGES.food2}
                title="Martabak lbs 06 - Gandaria Utara"
                Ad={false}
                distance={0.3}
                rating={4.5}
                discount="75%"
              />
              <RegularBox
                image={HOMEPAGE_IMAGES.food3}
                title="Sate Nyatee - Cilandak"
                Ad={false}
                distance={0.8}
                rating={4.6}
                discount="75%"
              />
              <ScrollViewRightEndButton />
            </ScrollView>
          </View>

          {/* People love food from */}
          <View className="mt-8">
            <View className="flex flex-row justify-between w-full px-4">
              <Text className="text-xl font-semibold">
                People love food from
              </Text>
              <View className="p-1 bg-[#defbf8] rounded-full">
                <Icon source="arrow-right" size={26} color="#03563a" />
              </View>
            </View>
            <ScrollView
              className="mt-5"
              horizontal={true}
              contentContainerStyle={{ paddingHorizontal: 16, gap: 16 }}
              showsHorizontalScrollIndicator={false}
            >
              <RegularBox
                image={HOMEPAGE_IMAGES.food4}
                title="Mie Gacoan - Bintaro"
                Ad={false}
                distance={5.8}
                rating={4.8}
                discount="75%"
              />
              <RegularBox
                image={HOMEPAGE_IMAGES.food5}
                title="Iga Bumus Bakar - Gandaria Selatan"
                Ad={false}
                distance={0.9}
                rating={3.7}
                discount="75%"
              />
              <RegularBox
                image={HOMEPAGE_IMAGES.food6}
                title="Nasi Padang Siang Malam - Kemang"
                Ad={false}
                distance={2.2}
                rating={4.5}
                discount="75%"
              />
              <ScrollViewRightEndButton />
            </ScrollView>
          </View>

          {/* Swiper ads */}
          <View className="w-full mt-8">
            <SwiperFlatList
              autoplay
              autoplayDelay={5}
              autoplayLoop
              index={2}
              showPagination={false}
              data={ADS_SWIPER}
              className="px-4"
              renderItem={({ item }) => (
                <AdsSwiper
                  title={item.title}
                  image={item.image}
                  subTitle={item.subTitle}
                  ads={item.ads}
                />
              )}
            />
          </View>

          {/* People love food from */}
          <View className="mt-8">
            <View className="flex flex-row justify-between w-full px-4">
              <Text className="text-xl font-semibold">Cobain Makanan baru</Text>
              <View className="p-1 bg-[#defbf8] rounded-full">
                <Icon source="arrow-right" size={26} color="#03563a" />
              </View>
            </View>
            <ScrollView
              className="mt-5"
              horizontal={true}
              contentContainerStyle={{ paddingHorizontal: 16, gap: 16 }}
              showsHorizontalScrollIndicator={false}
            >
              <RegularBox
                image={HOMEPAGE_IMAGES.food7}
                title={trimText("Geprek Chicken Rice Package With Onion", 33)}
                Ad={false}
                subTitle={trimText("Ayam Geprek Gold Chick - Jamur", 23)}
                price={formatCurrency(26990)}
              />
              <RegularBox
                image={HOMEPAGE_IMAGES.food8}
                title={trimText("Rice, Duck With Green Chili Sauce", 33)}
                Ad={false}
                subTitle={trimText("Nasi Bebek Madura Sambel Merah", 23)}
                price={formatCurrency(23000)}
              />
              <RegularBox
                image={HOMEPAGE_IMAGES.food9}
                title={trimText("Chicken Fried Rice", 33)}
                Ad={false}
                subTitle={trimText("Nasi Goreng Kang Daseng", 23)}
                price={formatCurrency(15400)}
                originalPrice={formatCurrency(28000)}
              />
              <RegularBox
                image={HOMEPAGE_IMAGES.food10}
                title={trimText("Geprek Chicken Rice Package", 33)}
                Ad={false}
                subTitle={trimText("I Am Geprek Bensu - Cempaka Putih", 23)}
                price={formatCurrency(25000)}
              />
              <ScrollViewRightEndButton />
            </ScrollView>
          </View>

          {/* Selesaikan Tantanganmu Sekarang*/}
          <View className="mt-8">
            <View className="flex flex-row justify-between w-full px-4">
              <Text className="text-xl font-semibold">
                Selesaikan Tantanganmu Sekarang
              </Text>
            </View>
            <ScrollView
              className="w-full mt-5"
              horizontal={true}
              contentContainerStyle={{ paddingHorizontal: 28, gap: 24 }}
              showsHorizontalScrollIndicator={false}
            >
              <ChallengeBox
                image={HOMEPAGE_IMAGES.challenge1}
                title={trimText("Win Discount 40% Vourcher Jajan Hemat", 35)}
                end={formatDateDDMMMYYYY(new Date("2024-07-22T03:24:00"))}
              />
              <ChallengeBox
                image={HOMEPAGE_IMAGES.challenge2}
                title={trimText("Win GrabGifts Up to 40rb!", 35)}
                end={formatDateDDMMMYYYY(new Date("2024-07-31T03:24:00"))}
              />
            </ScrollView>
          </View>

          {/* Nge-Grab pangkal hemat */}
          <View className="mt-8">
            <View className="flex flex-row justify-between w-full px-4">
              <Text className="text-xl font-semibold">
                Nge-Grab pangkal hemat
              </Text>
            </View>
            <ScrollView
              className="mt-5"
              horizontal={true}
              contentContainerStyle={{ paddingHorizontal: 16, gap: 16 }}
              showsHorizontalScrollIndicator={false}
            >
              <RegularBox
                image={HOMEPAGE_IMAGES.promo1}
                title={trimText("Pulang stasiun makin hemat", 33)}
                Ad={false}
              />
              <RegularBox
                image={HOMEPAGE_IMAGES.promo2}
                title={trimText("Cek dulu sebelum makan di resto", 33)}
                Ad={false}
              />
              <RegularBox
                image={HOMEPAGE_IMAGES.promo3}
                title={trimText("Untukmu pengguna GrabUnlimited", 33)}
                Ad={false}
              />
            </ScrollView>
          </View>

          {/* Kirim pakai Grab Express */}
          <View className="w-full mt-8">
            <View className="flex flex-row w-full px-4 gap-x-4">
              <Text className="text-xl font-semibold">
                Kirim pakai GrabExpress
              </Text>
            </View>
            <View className="flex-row items-center justify-center w-full px-4 mt-5 ">
              <LargeBox
                image={HOMEPAGE_IMAGES.grabExpress1}
                title="voucher diskon ongkir unlimited"
                Ad={false}
                position="left"
              />
              <LargeBox
                image={HOMEPAGE_IMAGES.grabExpress2}
                title="Dapet s.d 1 juta tiap bulan"
                Ad={false}
                position="right"
              />
            </View>
          </View>

          <Text className="my-8 text-[#9d9d9d] w-full text-center">
            That's all for now!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
