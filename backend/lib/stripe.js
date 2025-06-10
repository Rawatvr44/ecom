import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

export const stripe = new Stripe("sk_test_51RYLDEPCGOYBumLCgD4Kh0et7QFh98jx8VDOhGsJ5gFkit8okR6a0Lpxgc39DWrnCWhKaZgC0zHG7HlcAoWw95rK00gbJVAii9");
