import React from 'react';
import { createClient } from '@supabase/supabase-js';

// Инициализация Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASEURL;
const supabaseKey = import.meta.env.VITE_SUPABASEKEY;
const supabase = createClient(supabaseUrl, supabaseKey);

console.log('URL:', import.meta.env.VITE_supabaseUrl);
console.log('URL:', import.meta.env.VITE_supabaseKey);

export default supabase;