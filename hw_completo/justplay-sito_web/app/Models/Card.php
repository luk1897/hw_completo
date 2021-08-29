<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;


class Card extends Model
{

    protected $table = 'card';
    
    protected $fillable = [
        'id',
        'nome',
        'image',
        'created_at',
        'updated_at'
    ];

    public function user()
    {
        return $this->belongsToMany("App\Models\User");
    }

    // fare una funzione con cui posso inserire ogni carta scelta da un cliente
    public function cDB(){
        return $this->belongsToMany("App\Models\User",'cliente_carta','carta','cliente');
    }
}

?>