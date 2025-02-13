import { supabase } from './supabaseClient.js';

export async function saveUrl(original_url, short_code) {
    const { data, error } = await supabase
        .from('urls')
        .insert([{ original_url, short_code }]);

    if (error) {
        throw new Error(error.message);
    }
    return data;
}

export async function getUrlByCode(short_code) {
    const { data, error } = await supabase
        .from('urls')
        .select('original_url')
        .eq('short_code', short_code)
        .single();

    if (error) {
        return null;
    }
    return data.original_url;
}


