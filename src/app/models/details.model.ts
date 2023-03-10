export interface RetailerDetails {
    firstName: string,
    lastName: string,
    mobile: number,
    dob: Date,
    email: string,
    gender: string,
    address: string,
    pan: string,
    aadhaar: string,
    city: string,
    state: string,
    pincode: number,
    // amount: number,
    consent: boolean
}

export interface ConfirmRetailerDetails {
    firstName: string,
    lastName: string,
    dob: Date,
    gender: string,
    address: string,
    pan: string,
    leadCode: string,
    loanCode: string
}