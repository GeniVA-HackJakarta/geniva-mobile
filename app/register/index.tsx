import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import React from "react";
import { Link, router, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import RegularInput from "@/components/auth/RegularInput";
import FormInput from "@/components/auth/FormInput";
import FormPasswordInput from "@/components/auth/FormPasswordInput";
import { confirmPasswordMatch, emailValidator } from "@/utils/formValidator";
import { Checkbox } from "react-native-paper";

interface indexProps {}

export interface Form {
  name: string;
  email: string;
  handphone: string;
  password: string;
  confirmPassword: string;
  privacyChecked: boolean;
}

interface FormErrors {
  name: string;
  email: string;
  handphone: string;
  password: string;
  confirmPassword: string;
}

const initialForm = {
  name: "",
  email: "",
  handphone: "",
  password: "",
  confirmPassword: "",
  privacyChecked: false,
};

const initialFormErrors = {
  name: "",
  email: "",
  handphone: "",
  password: "",
  confirmPassword: "",
};

const index: React.FC<indexProps> = () => {
  const [form, setForm] = React.useState<Form>(initialForm);
  const [formErrors, setFormErrors] =
    React.useState<FormErrors>(initialFormErrors);
  const [isValid, setIsValid] = React.useState(false);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleSetShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleSetShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleFormChange = (key: keyof Form, value: string | boolean) => {
    const updatedForm = { ...form, [key]: value };
    setForm(updatedForm);

    // Clear the error for the current field

    // Set errors
    if (key !== "privacyChecked") {
      if (value !== "") {
        setFormErrors((prevErr) => ({ ...prevErr, [key]: "" }));
      } else if (value == "") {
        setFormErrors((prevErr) => ({
          ...prevErr,
          [key]: `${key} tidak boleh kosong`,
        }));
      }
    }

    // Validation check
    const allFieldsFilled = Object.entries(updatedForm).every(([k, v]) => {
      if (k === "privacyChecked") return v === true;
      return v !== "";
    });

    if (allFieldsFilled) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  // Handle Login
  const handleRegister = async () => {
    if (!emailValidator(form.email)) {
      setFormErrors((prevErr) => ({
        ...prevErr,
        email: "Email tidak valid",
      }));
    } else if (!confirmPasswordMatch(form.password, form.confirmPassword)) {
      setFormErrors((prevErr) => ({
        ...prevErr,
        confirmPassword: "Password tidak sama",
      }));
    } else {
      try {
        router.push("/");
      } catch (error) {}
    }
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView className="flex-1">
        <KeyboardAvoidingView
          className="flex-1"
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView
            className="flex-1"
            contentContainerStyle={{ paddingHorizontal: "5%", width: "100%" }}
            keyboardShouldPersistTaps="handled"
          >
            <Text className="text-3xl font-bold text-[#00B14F] mt-[10%] self-center">
              Register
            </Text>
            <FormInput
              title="Nama"
              name="name"
              value={form.name}
              handleValue={handleFormChange}
              valueError={formErrors.name}
            />
            <FormInput
              title="Email"
              name="email"
              value={form.email}
              handleValue={handleFormChange}
              valueError={formErrors.email}
            />
            <FormInput
              title="No. Handphone"
              name="handphone"
              value={form.handphone}
              handleValue={handleFormChange}
              valueError={formErrors.handphone}
            />
            <FormPasswordInput
              title="Password"
              name="password"
              value={form.password}
              handleValue={handleFormChange}
              valueError={formErrors.password}
              showPassword={showPassword}
              setShowPassword={handleSetShowPassword}
            />
            <FormPasswordInput
              title="Konfirmasi Password"
              name="confirmPassword"
              value={form.confirmPassword}
              handleValue={handleFormChange}
              valueError={formErrors.confirmPassword}
              showPassword={showConfirmPassword}
              setShowPassword={handleSetShowConfirmPassword}
            />
            <View className="mt-6 flex-row justify-normal items-center w-full pr-6">
              <Checkbox
                color="#00B14F"
                status={form.privacyChecked ? "checked" : "unchecked"}
                onPress={() =>
                  handleFormChange("privacyChecked", !form.privacyChecked)
                }
              />
              <Text className="text-xs flex-wrap">
                Membuat akun berarti Anda setuju dengan Ketentuan Layanan dan
                Kebijakan Privasi.
              </Text>
            </View>
            <View className="overflow-hidden rounded-full w-full mt-6">
              <Pressable
                className={`${isValid ? "bg-[#00B24F]" : "bg-[#747474]"} py-3`}
                android_ripple={{ color: isValid ? "#00802D" : "#747474" }}
                disabled={!isValid}
                onPress={() => handleRegister()}
              >
                <Text className="text-white text-center text-base font-semibold">
                  Register
                </Text>
              </Pressable>
            </View>
            <View className="w-full flex-row justify-center items-center mt-4">
              <Text>Sudah punya akun?</Text>
              <Link className="text-[#00B24F] ml-1" href={"/"}>
                Login
              </Link>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

export default index;
