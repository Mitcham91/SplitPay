export type RootStackParamList = {
  DefaultHome: undefined;
  RenterPhone: undefined;
  RenterCode: { phone: string };
   RenterVerifyLandlord: undefined;
   RenterLandlordConfirm: { name: string; phone: string; email?: string };
  
  RenterBankConnect: undefined;
};