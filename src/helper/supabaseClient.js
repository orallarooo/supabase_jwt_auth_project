import React from 'react';
import { createClient } from '@supabase/supabase-js';

// Инициализация Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

console.log('URL:', import.meta.env.VITE_SUPABASE_URL);
console.log('URL:', import.meta.env.VITE_SUPABASE_ANON_KEY);

export default supabase;