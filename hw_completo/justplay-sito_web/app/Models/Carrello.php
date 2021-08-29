<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Model;

    class Carrello extends Model
    {

        protected $table = 'carrello';

        protected $fillable = [
            'id',
            'codice_cliente',
            'codice_gioco',  
            'created_at',
            'updated_at'
        ];

        public function user()
        {
            return $this->belongsTo("App\Models\User","codice_cliente");
        }

        public function gioco()
        {
            return $this->belongsTo("App\Models\Gioco","codice_gioco");
        }


    }
?>