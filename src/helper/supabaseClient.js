import React from 'react';
import { createClient } from '@supabase/supabase-js';

// Инициализация Supabase
const supabaseUrl = import.meta.env.VITE_supabaseUrl;
const supabaseKey = import.meta.env.VITE_supabaseKey;
const supabase = createClient(supabaseUrl, supabaseKey);

console.log('URL:', import.meta.env.VITE_supabaseUrl);
console.log('URL:', import.meta.env.VITE_supabaseKey);

export default supabase;